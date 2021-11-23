import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

export default function Home() {
  const docs = [
    {
      uri: '/Critical-Skills-Employment-Permits-Checklist.pdf',
    },
  ];
  const docs1 = [
    {
      uri: '/CASEMAN.xlsx',
    },
  ];
  const docs2 = [
    {
      uri: '/VsCode-Shortcut.docx',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs1} />
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs2} />
    </div>
  );
}
