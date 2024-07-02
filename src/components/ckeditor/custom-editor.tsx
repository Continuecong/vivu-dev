'use client' // only in App Router
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	Bold,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Code,
	CodeBlock,
	Essentials,
	GeneralHtmlSupport,
	Heading,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Italic,
	Link,
	LinkImage,
	List,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	SelectAll,
	ShowBlocks,
	SourceEditing,
	Table,
	TableToolbar,
	TextTransformation,
	Undo
} from 'ckeditor5';
import { PasteFromOfficeEnhanced } from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';


function CustomEditor() {
  const LICENSE_KEY = 'Y2Nmc3NrcUF2WHdXeWcydmh3MDRlYzhhNkpqVzV0cXNMWXdSREluV2lwR0lIVWJDNlFIYmJ5bkdxOHpmNGc9PS1NakF5TkRBM01qZz0='
  const CKBOX_TOKEN_URL = 'https://112102.cke-cs.com/token/dev/pw9Xo6XWmSbaN57qHd8nhVYCrRb0HuW6o1i1?limit=10'

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            'undo',
            'redo',
            '|',
            'sourceEditing',
            'showBlocks',
            'selectAll',
            '|',
            'heading',
            '|',
            'bold',
            'italic',
            'code',
            '|',
            'link',
            'insertImage',
            'ckbox',
            'insertTable',
            'codeBlock',
            'htmlEmbed',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'accessibilityHelp'
          ],
          shouldNotGroupWhenFull: false
        },
        plugins: [
          AccessibilityHelp,
          Autoformat,
          AutoImage,
          AutoLink,
          Autosave,
          BalloonToolbar,
          Bold,
          CKBox,
          CKBoxImageEdit,
          CloudServices,
          Code,
          CodeBlock,
          Essentials,
          GeneralHtmlSupport,
          Heading,
          HtmlComment,
          HtmlEmbed,
          ImageBlock,
          ImageCaption,
          ImageInsert,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageTextAlternative,
          ImageToolbar,
          ImageUpload,
          Italic,
          Link,
          LinkImage,
          List,
          Paragraph,
          PasteFromOffice,
          PasteFromOfficeEnhanced,
          PictureEditing,
          SelectAll,
          ShowBlocks,
          SourceEditing,
          Table,
          TableToolbar,
          TextTransformation,
          Undo
        ],
        balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
        ckbox: {
          tokenUrl: CKBOX_TOKEN_URL
        },
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph'
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1'
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2'
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Heading 3',
              class: 'ck-heading_heading3'
            },
            {
              model: 'heading4',
              view: 'h4',
              title: 'Heading 4',
              class: 'ck-heading_heading4'
            },
            {
              model: 'heading5',
              view: 'h5',
              title: 'Heading 5',
              class: 'ck-heading_heading5'
            },
            {
              model: 'heading6',
              view: 'h6',
              title: 'Heading 6',
              class: 'ck-heading_heading6'
            }
          ]
        },
        htmlSupport: {
          allow: [
            {
              name: /^.*$/,
              styles: true,
              attributes: true,
              classes: true
            }
          ]
        },
        image: {
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'imageStyle:alignBlockLeft',
            'imageStyle:block',
            'imageStyle:alignBlockRight',
            '|',
            'resizeImage',
            '|',
            'ckboxImageEdit'
          ],
          styles: {
            options: ['alignBlockLeft', 'block', 'alignBlockRight']
          }
        },
        initialData:
          '<h2>ViVu VNDTS! 🎉</h2>\n<p>\n',
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: 'https://',
          decorators: {
            toggleDownloadable: {
              mode: 'manual',
              label: 'Downloadable',
              attributes: {
                download: 'file'
              }
            }
          }
        },
        placeholder: 'Type or paste your content here!',
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        }
      }}
    />
  )
}

export default CustomEditor
