import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

export default function Home() {
  const docs = [
    {
      uri: '/Critical-Skills-Employment-Permits-Checklist.pdf',
    },
  ];

  return (
    <div className="">
      <iframe
        src="https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fieee802%2Eorg%3A80%2Fsecmail%2FdocIZSEwEqHFr%2Edoc"
        width="100%"
        height="100%"
        frameborder="0"
      >
        This is an embedded{' '}
        <a target="_blank" href="http://office.com">
          Microsoft Office
        </a>{' '}
        document, powered by{' '}
        <a target="_blank" href="http://office.com/webapps">
          Office Online
        </a>
        .
      </iframe>
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
    </div>
  );
}
