#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PvmAccountGovernerStack } from '../lib/pvm-account-governer-stack';

const app = new cdk.App();
new PvmAccountGovernerStack(app, 'PvmAccountGovernerStack');
