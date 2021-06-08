/**
 * @module Annoto
 */

import { AnnotoConfig, IWidgetBackendOptions, MediaDetails } from './config';
import { AnnotoUxEvent, IAnnotoStatsEvent, IAnnotoVideoBenchmarkEvent } from './events';
import { AnnotoApi, DeviceDetectorApi, OriginProvider, AnnotoMetadata } from './api';

export type AnnotoEventType = 'ready' | 'metadata' | 'ux' | 'stats_events' | 'video_benchmark';
export type AnnotoReadyCallback = (api: AnnotoApi) => void;
export type AnnotoMetadataCallback = (metadata: AnnotoMetadata) => void;
export type AnnotoUxEventCallback = (uxEvent: AnnotoUxEvent) => void;
export type AnnotoStatsEventCallback = (statsEvent: IAnnotoStatsEvent) => void;
export type AnnotoVideoBenchmarkCallback = (uxEvent: IAnnotoVideoBenchmarkEvent) => void;

export interface Annoto {
    on(event: AnnotoEventType, cb: AnnotoReadyCallback | AnnotoMetadataCallback | AnnotoUxEventCallback | AnnotoStatsEventCallback | AnnotoVideoBenchmarkCallback): void;
    boot(config: AnnotoConfig): void;
}

export {
    AnnotoConfig,
    AnnotoApi,
    DeviceDetectorApi,
    OriginProvider,
    AnnotoMetadata,
    MediaDetails,
    AnnotoUxEvent,
    IWidgetBackendOptions,
    IAnnotoStatsEvent,
    IAnnotoVideoBenchmarkEvent
};