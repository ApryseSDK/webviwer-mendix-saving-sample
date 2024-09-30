# WebViewer - Mendix Document Saving/Updating Sample

[WebViewer](https://docs.apryse.com/documentation/web/) is a powerful JavaScript-based PDF Library that is part of the https://docs.apryse.com/documentation/web/. It provides a slick out-of-the-box responsive UI that interacts with the core library to view, annotate and manipulate PDFs that can be embedded into any web project.

This sample Mendix app allows users to upload files, annotate them, and then save the updated version. This is meant to be a sample for reference and not for production use.

The WebViewer widget project used in this sample can be found [here](https://github.com/PDFTron/webviewer-mendix-sample).

The current WebViewer version in this sample should be: 10.12.0.

## Context

Mendix allows users to upload and download files directly. This sample shows how to add this functionality to the WebViewer widget.

## Methodology

Mendix offers a `FileManager` widget which facilitates uploading and/or downloading. However, it does not provide a direct URL through the manager or the entity that represents it when a file is uploaded. This sample adds the ability to get the URL so that the WebViewer widget can load the document. It also sets up a REST API endpoint to update the document after annotating.

### Entities

In this sample app, a `FileManager` widget is added to allow users to upload/download the files. When a file is uploaded, a domain model entity `File` that extends `System.FileDocument` is created. There are two calculated fields on the `File` entity: `Url` and `DocumentId`. These are necessary as files uploaded to Mendix are stored locally but obfuscated a bit. The original name and size are stored in a `FileDocument` entity that is difficult to retrieve for viewing purposes.

The `Url` attribute is calculated by getting the unique object ID for the `File` entity and forming the URL to fetch the document. It is then passed to the WebViewer widget to be loaded. The URL would look something similar to this:

```
https://yourapplicationurl.com/file?guid=guidIdofthefileobject
```

The `DocumentId` is used to reference the original document to be updated after annotating. This is also provided to WebViewer.

### Java Actions

In this sample, there are also three additional Java actions that execute in workflows.

- `getFileId` - This is a helper method used to get the file ID to form the URL and the document update
- `getFileUrl` - This is used to get the direct download URL for a stored document
- `updateDocument` - This action takes in the file ID to be updated and the file data (binary) to update the document with

The code is available in each of their respective files.

### REST API

A single endpoint REST API was also added to accept the updated file through a `PUT` request. This calls the `updateDocument` action which actually performs the update.

On the WebViewer side, the widget now accepts the URL as well as the file ID. A save button has also been added to the top right in the header. For details about customizing and adding a save, see the guide [here](https://docs.apryse.com/documentation/web/guides/customizing-header/#adding-a-custom-save-button).

As previously mentioned, the file ID is used in saving. The save button triggers a `PUT` request to a path with the file ID and file data in the request body.

## Notes

When updating the WebViewer widget, ensure that the deployed static `lib` assets in the `theme` folder match the version in the `package.json` of the widget project.

Beginning with Mendix 9, the `theme/resources` path is no longer valid. As such, move the resources to respective folders for `web` and `mobile`. For example, for `web` it will look like this:
```
/path/to/your/mendix/app/theme/web/resources
└───lib
    ├───core
    └───ui
```

See the widget's [README.md](/CustomWidgets/WebViewer/README.md) for more details about modifying and rebuilding the WebViewer component.

## Future Possibilities

Since this sample assumes all documents are PDF documents, it is possible to extend the sample to parse out the extension of the uploaded document and store it on the `File` entity. This can then be passed to WebViewer so that it can be provided to the `extension` loading option. Read more about this [here](https://docs.apryse.com/documentation/web/guides/basics/open/url/#the-extension-option).
