import { createElement, useRef, useEffect, useState } from "react";
import viewer, { WebViewerInstance } from "@pdftron/webviewer";

export interface InputProps {
    file?: string;
    fileId?: string;
    l?: string;
}

const PDFViewer: React.FC<InputProps> = props => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const [instance, setInstance] = useState<null | WebViewerInstance>(null);

    useEffect(() => {
        viewer(
            {
                path: "/resources/lib",
                licenseKey: props.l
            },
            viewerRef.current as HTMLDivElement
        ).then(instance => {
            const { UI, Core } = instance;

            setInstance(instance);

            UI.setHeaderItems(header => {
                header.push({
                    type: 'actionButton',
                    img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
                    onClick: async () => {
                        // Export annotation XFDF
                        const xfdfString = await Core.annotationManager.exportAnnotations({
                            fields: true,
                            links: true,
                            widgets: true,
                        });
                        // Send it merged with the document data to REST API to update
                        fetch(`/rest/documentstore/v1/documents/${props.fileId}`, {
                            method: 'PUT',
                            body: await Core.documentViewer.getDocument().getFileData({ xfdfString }),
                        })
                    }
                });
            });

            if (props.file) {
                UI.loadDocument(props.file);
            }
        });
    }, []);

    useEffect(() => {
        if (instance && props.file) {
            instance.UI.loadDocument(props.file);
        }
    }, [instance, props.file]);

    return <div className="webviewer" ref={viewerRef}></div>;
};

export default PDFViewer;
