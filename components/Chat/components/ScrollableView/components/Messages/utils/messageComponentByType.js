import Text from '../components/Text';
import Typing from '../components/Typing';
import wrapMessage from './wrapMessage';

import { messageTypes } from '../../../../../../../constants/messageTypes';

export default (type) => {
  console.log({ type });

  switch (type) {
    case messageTypes.TYPING:
      return wrapMessage(Typing);

    case messageTypes.TEXT:
      return wrapMessage(Text);

    default:
      return wrapMessage(Text);
  }
}
