import {
  BlockAction,
  ButtonAction,
  SlackActionMiddlewareArgs,
} from '@slack/bolt';

export const handleCroqueYesNoAction = async ({
  ack,
  action,
  respond,
}: SlackActionMiddlewareArgs<BlockAction<ButtonAction>>) => {
  await ack();

  if (action.value === 'true') {
    await respond({
      replace_original: true,
      text: '>Do you want to eat some croqueskes? :sandwich:\n>*Yes*',
    });
  } else {
    await respond({
      replace_original: true,
      text: '>Do you want to eat some croqueskes? :sandwich:\n>*No*',
    });
  }
};
