/**
 * CE.SDK HTML5 Exporter Starterkit - Main Entry Point
 *
 * A video editor with HTML5 export capabilities including embedded/external
 * format options, animation timeline, and ZIP download.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initHtml5ExporterEditor } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  // Unique user identifier for analytics (customize for your app)
  userId: 'starterkit-html5-ads-exporter-user'

  // Local assets (uncomment and set path for self-hosted assets)
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize HTML5 Exporter Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    // Initialize the HTML5 exporter editor
    await initHtml5ExporterEditor(cesdk);

    // ============================================================================
    // Load Scene
    // ============================================================================

    // Load the HTML5 banner demo scene (an animated banner template)
    await cesdk.engine.scene.loadFromArchiveURL(
      'https://img.ly/showcases/cesdk/cases/html5-export/html5-banner.zip'
    );
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
