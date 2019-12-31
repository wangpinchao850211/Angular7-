import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
// ...

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
    Base64UploadAdapter
    // ...
];

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            'bold',
            // ...
        ]
    },
    // ...
};