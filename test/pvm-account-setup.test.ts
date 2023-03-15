import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as PvmAccountSetup from '../lib/pvm-account-governer-stack';

test('Account Governer Stack matches snapshot', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new PvmAccountSetup.PvmAccountGovernerStack(app, 'MyTestStack');
  // THEN

  const template = Template.fromStack(stack);

  // template should match snapshot
  expect(template).toMatchSnapshot();
});
