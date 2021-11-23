import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';
// import FileViewer from 'react-file-viewer';
import dynamic from 'next/dynamic';
const FileViewer = dynamic(() => import('react-file-viewer'));

// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fattachment-viewer.vercel.app%2FVsCode-Shortcut.docx&wdOrigin=BROWSELINK

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

  const file = '/VsCode-Shortcut.docx';
  const type = 'docx';
  const file1 = '/CASEMAN.xlsx';
  const type1 = 'xlsx';

  return (
    <>
      <div>
        <FileViewer fileType={type} filePath={file} />
        <FileViewer fileType={type1} filePath={file1} />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs1} />
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs2} />
      </div>
    </>
  );
}
