import { imageUrl } from "./sanity";

const blogSerializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;
      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        switch (level) {
          case "1":
            return (
              <h1 className="text-center my-2 font-semibold text-4xl">{props.children}</h1>
            );
          case "2":
            return (
              <h2 className="text-center my-2 font-bold text-2xl">{props.children}</h2>
            );
          case "3":
            return (
              <h3 className="text-center my-2 font-semibold text-2xl">{props.children}</h3>
            );
          case "4":
            return (
              <h4 className="text-center my-2 font-semibold text-xl">{props.children}</h4>
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
      return (
        <div className="leading-4 my-4">
          <p style={{ textIndent: "16px" }}>{props.children}</p>
        </div>
      );
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
    listItem: (props) => (
      <li className="py-2 list-disc leading-4">{props.children}</li>
    ),
    image: (props) => (
      <div className="my-22 max-h-3/4 ">
        <figure className="">
          <img
            src={imageUrl(props.node.asset).url()}
            alt={props.node.alt}
            className="mx-auto"
          />
        </figure>
      </div>
    ),
  },
};

export default blogSerializers;
