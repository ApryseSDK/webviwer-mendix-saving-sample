# WebViewer - Mendix Web Widget

[WebViewer](https://docs.apryse.com/documentation/web/) is a powerful JavaScript-based PDF Library that is part of the [Apryse PDF SDK](https://www.apryse.com). It provides a slick out-of-the-box responsive UI that interacts with the core library to view, annotate and manipulate PDFs that can be embedded into any web project.

![WebViewer UI](https://www.pdftron.com/downloads/pl/webviewer-ui.png)

This repo is specifically designed for any users interested in customizing and integrating WebViewer into Mendix low-code app. [An in-depth video](https://youtu.be/a9HNVzbmDLM) is available to help with getting started.

## Initial setup

Before beginning, make sure that [Node.js](https://nodejs.org/en/) is installed in the development environment.

## Create a new Mendix App or use an existing app

Open [Mendix Studio Pro](https://docs.mendix.com/howto/general/install) and create a new project by selecting `File > New Project` from the top menu bar, and choose the `Blank` app.

After creating a new app or inside of the existing app, navigate to the root directory and create a new folder called `CustomWidgets/WebViewer` and place the extracted contents from [this sample](https://github.com/PDFTron/webviewer-mendix-sample) inside.

By default, Mendix projects are stored in:
```
C:\Users\$your_username\Documents\Mendix\
```
In the terminal or command line, navigate to `CustomWidgets/WebViewer` and run:
```
npm install
```

After the command completes, run:
```
npm run dev
```
This will contiuously make a build of the Mendix Web Widget with WebViewer as the code changes and copy it into the app widget folder. When complete, the terminal will display similarly to the following:

```
bundles C:\Users\$your_username\Documents\Mendix\MyApp\CustomWidget\WebViewer\src\WebViewer.tsx → dist/tmp/widgets/pdftron/webviewer/WebViewer.js...
LiveReload enabled
created dist/tmp/widgets/pdftron/webviewer/WebViewer.js in 37.1s
bundles C:\Users\$your_username\Documents\Mendix\MyApp\CustomWidget\WebViewer\src\WebViewer.tsx → dist/tmp/widgets/pdftron/webviewer/WebViewer.mjs...
LiveReload enabled on port 35730
created dist/tmp/widgets/pdftron/webviewer/WebViewer.mjs in 2s
bundles C:\Users\$your_username\Documents\Mendix\MyApp\CustomWidget\WebViewer\src\WebViewer.editorPreview.tsx → dist/tmp/widgets/WebViewer.editorPreview.js...
created dist/tmp/widgets/WebViewer.editorPreview.js in 1.3s

[2022-07-05 13:23:22] waiting for changes...
```

Next, copy the static `lib` assets required for WebViewer to run. The files are located in `CustomWidgets/WebViewer/node_modules/@pdftron/webviewer/public` and must be moved into a location that will be served and is publicly accessible.

### Prior to Mendix 9

Place the assets into `theme/resources` by creating a new folder called `lib` and place the contents from `node_modules/@pdftron/webviewer/public` there.
`theme/resources` should have a directory structure like so:
```
/path/to/your/mendix/app/theme/resources
└───lib
    ├───core
    └───ui
```

### Mendix 9 or higher

Beginning with Mendix 9, the `theme/resources` path is no longer valid. As such, move the resources to respective folders for `web` and `mobile`. For example, for `web` it will look like this:
```
/path/to/your/mendix/app/theme/web/resources
└───lib
    ├───core
    └───ui
```

## Place WebViewer into a Page

In the Mendix toolbox, `WebViewer` widget will appear near the very bottom.

1. Click and drag the widget on to the page. Bind it to an entity, if desired.

2. Run the Mendix app and the WebViewer will load on the page that it was added on. By default, it will have loaded a default document.

3. Right click the widget and access the properties. The loaded document can be changed using the URL property. This is useful for single document viewing purposes.

## Connect Attribute to WebViewer

To dynamically change documents, the WebViewer can be bount to an attribute. In the following example adds widgets to allow users to provide a document URL which makes WebViewer load the new document.

1. Access the `Domain Model` of the module where the viewer will be integrated, and create a new `Entity`. This entity will contain the file URL to be loaded from.

2. Right-click the newly created `Entity`, click `Add > Attribute`. Ensure its `Type` is set to `String`.

3. Next, open the page inside of the module.

4. Add a `Data View` widget to the page by dragging it from the Toolbox.

5. Double-click the widget, and give it a data source microflow by selecting `Data source > Type > Microflow`. This will create the entity when the URL is changed.

6. In the microflow field, click the `Select` button and press `New` to create a new microflow.

7. Open the created microflow and drag `Create object` from the toolbox onto the microflow flow line. If there is a parameter object (the object that has `U` and `(Not set)` underneath), delete it.

8. Open `Create object` by double-clicking on it and select the entity created earlier.

9. Right-click the `Create Entity` activity, then click `Set $NewEntity as Return Value`.

10. Go back to the page where the `Data View` was placed, and drag a `Text box` into `Data View` for the user to enter a URL.

11. Open the textbox's properties and find the `Data Source` panel.

12. Change the `Attribute` to the string attribute created in Steps 1 and 2. This will set the attribute when it is changed in the text box.

13. Press F4 or from the top menu bar select `Project > Synchronize Project Directory` to synchronize with the local file changes.

14. Return to the page with the `Data View`. In the Toolbox, under `Add-ons`, the `WebViewer` widget can now be seen.

15. Drag the `WebViewer` widget into the `Data View`.

16. Right-click on the `WebViewer` widget and set the `Attribute` property to the attribute created on the entity.

17. Run the app by clicking `Run Locally` at the top.

WebViewer can now load the URL that is passed through the text box. When the URL and Attribute are used, **Attribute** takes priority.

## Attribute Code

The code for how the Attribute code works can be found as follows:

1. Navigate to the WebViewer location inside of `App/CustomWidgets/webViewer` and open it in a code editor.

2. Open WebViewer component available in `src/components/PDFViewer.tsx`. Inside of it, the WebViewer constructor can be passed various customization options and call APIs on the instance object. The Attribute that was created in previous steps is passed in `props.file`:

```javascript
useEffect(() => {
    if (instance && props.value !== "") {
        instance.loadDocument(props.value);
    }
}, [props.value]);
```

The code snippet listens for any of the changes in `props` and then calls `loadDocument` API to load a new document. This can be connected with the existing flows or URLs can be passed from the file storage. Make sure that [CORS is configured](https://docs.apryse.com/documentation/web/faq/cors-support/) in case of any errors.

## Customizing the WebViewer Widget

The WebViewer widget can be further customized by modifying `src/components/PDFViewer.tsx`. 
After any change in the code, make sure to run `npm run dev` within the widget's console or terminal and update the files in Mendix Studio Pro by pressing F4, or from the top menu bar selecting `Project > Synchronize Project Directory`.

As examples, check out the following guides:
1. [Further Loading Options for Opening URLs](https://docs.apryse.com/documentation/web/guides/basics/open/url/#loading-options)
2. [Hiding displayed features](https://docs.apryse.com/documentation/web/guides/hiding-elements/)

## WebViewer APIs

See [API documentation](https://docs.apryse.com/api/web/WebViewerInstance.html).

## Support

https://apryse.com/form/trial-support

## License

See [license](./LICENSE).
