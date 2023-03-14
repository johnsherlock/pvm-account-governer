#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PvmAccountSetupStack } from '../lib/pvm-account-setup-stack';

const app = new cdk.App();
new PvmAccountSetupStack(app, 'PvmAccountSetupStack');
