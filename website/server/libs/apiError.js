// apiError(key) will be called by all controllers / api tests
// it includes the api- and commonErrors, since common-ops are used in the api too

import _ from 'lodash';

import commonErrors from '../../common/errors/commonErrorMessages';
import apiErrors from '../../common/errors/apiErrorMessages';

export default function (msgKey, vars = {}) {
  let message = apiErrors[msgKey];
  if (!message) message = commonErrors[msgKey];
  if (!message) throw new Error(`Error processing the API message "${msgKey}".`);

  let clonedVars = vars ? _.clone(vars) : {};

  // TODO cache the result of template() ? More memory usage, faster output
  return _.template(message)(clonedVars);
}
