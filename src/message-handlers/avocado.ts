import { GenericMessageEvent, SlackEventMiddlewareArgs } from '@slack/bolt';
import { WebClient } from '@slack/web-api';
import { AVOCADO_BIRTHDAY } from 'config';
import { format, formatDistanceToNowStrict } from 'date-fns';
import Imgur from 'services/imgur';

interface Options extends SlackEventMiddlewareArgs<'message'> {
  client: WebClient;
}

export const handleAvocadoMessage = async (options: Options) => {
  const { say, client } = options;
  const message = options.message as GenericMessageEvent;
  const { thread_ts } = message;

  // only allow avocado to be posted in #cz-office-gent channel
  if (message.channel_type === 'channel' && message.channel !== 'C023XSSPZSQ') {
    await client.reactions.add({
      name: 'x',
      channel: message.channel,
      timestamp: message.ts,
    });
    return;
  }

  const url = await Imgur.upload('/avocado.jpg');
  if (!url) {
    await say({
      text: 'Sorry, having trouble uploading photo :cry:',
      thread_ts: thread_ts || message.event_ts,
    });
    return;
  }

  await say({
    thread_ts,
    blocks: [
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Birthday*\n${format(AVOCADO_BIRTHDAY, 'MMMM do, yyyy')}`,
          },
          {
            type: 'mrkdwn',
            text: `*Age*\n${formatDistanceToNowStrict(AVOCADO_BIRTHDAY)}`,
          },
        ],
      },
      {
        type: 'image',
        image_url: url,
        title: {
          type: 'plain_text',
          text: 'craftzing-avocado.jpg',
        },
        alt_text: 'craftzing-avocado.jpg',
      },
    ],
  });
};
