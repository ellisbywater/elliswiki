import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;
      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        switch (level) {
          case "1":
            return (
              <h1 className="text-center my-2 text-2xl">{props.children}</h1>
            );
          case "2":
            return (
              <h2 className="text-center my-2 text-xl">{props.children}</h2>
            );
          case "3":
            return (
              <h3 className="text-center my-2 text-lg">{props.children}</h3>
            );
          case "4":
            return (
              <h4 className="text-center my-2 text-md">{props.children}</h4>
            );
          default:
            return (
              <p className="text-center my-2 text-base">{props.children}</p>
            );
        }
      }

      if (style === "blockquote") {
        return <p className="text-center my-2 text-base">{props.children}</p>;
      }
      return BlockContent.defaultSerializers.types.block(props);
    },
    code: (props) => (
      <pre className="text-center my-2 text-base">
        <code>{props.children.code}</code>
      </pre>
    ),
    list: (props) =>
      props.type === "bullet" ? (
        <ul className="mx-auto list-disc my-2">{props.children}</ul>
      ) : (
        <ol className="mx-auto list-decimal my-2">{props.children}</ol>
      ),
    listItem: (props) => <li className="py-2">{props.children}</li>,
  },
};

const BlogRender = ({ textContent }) => (
  <div>
    <p>{textContent && textContent.length}</p>
    {textContent && <pre>{JSON.stringify(textContent, null, 2)}</pre>}
    <BlockContent blocks={textContent} serializers={serializers} />
  </div>
);

export default BlogRender;
