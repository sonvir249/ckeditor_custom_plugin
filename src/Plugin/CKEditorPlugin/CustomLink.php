<?php

namespace Drupal\adg_link\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginInterface;
use Drupal\ckeditor\CKEditorPluginButtonsInterface;
use Drupal\Component\Plugin\PluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "Youtube" plugin, with a CKEditor.
 *
 * @CKEditorPlugin(
 *   id = "adg_link",
 *   label = @Translation("ADG Plugin")
 * )
 */
class ADGLink extends PluginBase implements CKEditorPluginInterface, CKEditorPluginButtonsInterface {

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'adg_link') . '/js/plugins/link/plugin.js';
  }

  /**
   * @return array
   */
  public function getButtons() {
    $iconImage = drupal_get_path('module', 'adg_link') . '/js/plugins/link/images/icon.png';

    return [
      'ADGLink' => [
        'label' => t('Add Custom Link'),
        'image' => $iconImage,
      ]
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}
