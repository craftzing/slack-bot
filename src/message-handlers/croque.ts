import { GenericMessageEvent, SlackEventMiddlewareArgs } from '@slack/bolt';
import { WebClient } from '@slack/web-api';

interface Options extends SlackEventMiddlewareArgs<'message'> {
  client: WebClient;
}

export const handleCroqueMessage = async (options: Options) => {
  const { client, say } = options;
  const message = options.message as GenericMessageEvent;

  await client.reactions.add({
    name: 'sandwich',
    channel: message.channel,
    timestamp: message.ts,
  });

  const thread_ts = message.thread_ts || message.event_ts;

  say({
    thread_ts,
    text: 'Do you want to eat some croqueskes? :sandwich:',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: `Do you want to eat some croqueskes? :sandwich:`,
        },
      },
      {
        type: 'actions',
        block_id: 'croque-yesno',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Yes',
            },
            style: 'primary',
            value: 'true',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'No',
            },
            style: 'danger',
            value: 'false',
          },
        ],
      },
    ],
  });
};
