import { BillingAlarm } from 'aws-cdk-billing-alarm';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class PvmAccountGovernerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const email = 'john.sherlock@gmail.com'

    new BillingAlarm(this, 'GreaterThanZeroBillingAlarm', {
      monthlyThreshold: 0,
      emails: [email],
    });

    new BillingAlarm(this, 'GreaterThanTenBillingAlarm', {
      monthlyThreshold: 10,
      emails: [email],
    });

    new BillingAlarm(this, 'GreaterThanTwentyBillingAlarm', {
      monthlyThreshold: 20,
      emails: [email],
    });

    new BillingAlarm(this, 'GreaterThanThirtyBillingAlarm', {
      monthlyThreshold: 30,
      emails: [email],
    });

  }
}
