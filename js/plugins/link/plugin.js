( function() {
    CKEDITOR.plugins.add( 'adg_link', {
        init: function( editor ) {
            editor.addCommand( 'insertADGLink', new CKEDITOR.dialogCommand( 'adgDialog' ));
            editor.ui.addButton( 'ADGLink', {
                label: 'Insert Timestamp',
                command: 'insertADGLink',
                toolbar: 'insert',
                icon : this.path + 'images/icon.png'
            });
            CKEDITOR.dialog.add( 'adgDialog', function ( instance ) {
                var list_type = 'request_a_sample';
                return {
                    title: 'Custom Link',
                    minWidth: 400,
                    minHeight: 200,
                    contents: [
                        {
                            id: 'adg_link',
                            expand : true,
                            elements: [
                                {
                                    type: 'text',
                                    id: 'link_text',
                                    label: 'Link Text'
                                },
                                {
                                    type: 'select',
                                    id: 'link_type',
                                    label: 'Types',
                                    items: [ [ 'Contact Virtual Rep', 'virtual_rep' ], [ 'Request a Sample', 'request_a_sample' ], [ 'Download resources', 'download_resources' ], [ 'Watch Video / Content', 'watch_video_content' ], ['Go to', 'go_to'] ],
                                    'default': 'request_a_sample',
                                    onChange: function( api ) {
                                        list_type = this.getValue();
                                    }
                                }
                            ]
                        }
                    ],
                    onOk: function() {
                        var dialog = this;
                        var anchor = editor.document.createElement( 'a' );
                        anchor.setAttribute('href', "#");
                        anchor.setAttribute('data-premiumAction', list_type);
                        anchor.setText( dialog.getValueOf( 'adg_link', 'link_text' ));
                        editor.insertElement( anchor );
                    },


                };
            });
            editor.on('doubleclick', function (evt) {
                var element = getSelectedLink(editor) || evt.data.element;

                if (!element.isReadOnly()) {
                    if (element.is('a') ) {
                        editor.getSelection().selectElement(element);
                        editor.getCommand('insertADGLink').exec();
                    }
                }
            });
        }
    });
    function getSelectedLink(editor) {
        var selection = editor.getSelection();
        var selectedElement = selection.getSelectedElement();
        if (selectedElement && selectedElement.is('a')) {
            return selectedElement;
        }

        var range = selection.getRanges(true)[0];

        if (range) {
            range.shrink(CKEDITOR.SHRINK_TEXT);
            return editor.elementPath(range.getCommonAncestor()).contains('a', 1);
        }
        return null;
    }
})();
