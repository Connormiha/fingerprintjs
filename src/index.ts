import { load, Agent, LoadOptions, GetOptions, GetResult, hashComponents, componentsToDebugString } from './agent'
import { BuiltinComponents } from './sources'
import { Confidence } from './confidence'
import { Component, UnknownComponents } from './utils/entropy_source'
import { x64hash128 } from './utils/hashing'

// Exports that are under Semantic versioning
export {
  load,
  Agent,
  LoadOptions,
  GetOptions,
  GetResult,
  hashComponents,
  componentsToDebugString,
  Component,
  UnknownComponents,
  BuiltinComponents,
  Confidence,
}
// The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
// It should contain all the public exported values.
export default { load, hashComponents, componentsToDebugString }

// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
export const murmurX64Hash128 = x64hash128
export { prepareForSources } from './agent'
export { sources } from './sources'
export { getRawAudioFingerprint } from './sources/audio'
export { getRawCanvasFingerprint } from './sources/canvas'
export { getRawScreenFrame } from './sources/screen_frame'
export { getRawScreenResolution } from './sources/screen_resolution'
export { getStateFromError as handleApplePayError } from './sources/apple_pay'
export { getWebGLContext } from './sources/webgl'
export {
  getFullscreenElement,
  isAndroid,
  isTrident,
  isEdgeHTML,
  isChromium,
  isWebKit,
  isGecko,
  isDesktopWebKit,
} from './utils/browser'
export {
  loadSources,
  Source,
  SourcesToComponents,
  transformSource, // Not used here but adds only 222 uncompressed (60 compressed) bytes of code
  UnknownSources,
} from './utils/entropy_source'
export { withIframe } from './utils/dom'
export { getUTF8Bytes } from './utils/data'
