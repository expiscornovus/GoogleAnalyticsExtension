import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
// import { ReactGA } from 'react-ga';
import * as ReactGA from 'react-ga';

import * as strings from 'GoogleAnalyticsApplicationCustomizerStrings';

const LOG_SOURCE: string = 'GoogleAnalyticsApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IGoogleAnalyticsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  GoogleAnalyticskey: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class GoogleAnalyticsApplicationCustomizer
  extends BaseApplicationCustomizer<IGoogleAnalyticsApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    console.log("initializing analytics");
    ReactGA.initialize(this.properties.GoogleAnalyticskey);
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log("initialized analytics");
    return Promise.resolve();
  }
}
