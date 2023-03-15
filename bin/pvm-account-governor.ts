#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PvmAccountGovernorStack } from '../lib/pvm-account-governor-stack';

const app = new cdk.App();
new PvmAccountGovernorStack(app, 'PvmAccountGovernerStack');
