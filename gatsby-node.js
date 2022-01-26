// gatsby-node.js
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.onCreateNode = async ({
  node,
  createNodeId,
  actions: { createNodeField, createNode },
  cache,
  store
}) => {
  if (
    node.internal.type === 'Mdx' &&
    node.frontmatter &&
    node.frontmatter.featuredImage
  ) {
    let featuredImage = await Promise.all(
      node.frontmatter.featuredImage.map((url) => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store
          });
        } catch (error) {
          console.error(error);
        }
      })
    );
    if (featuredImage) {
      createNodeField({
        node,
        name: 'featuredImage',
        value: featuredImage.map((image) => {
          return image.id;
        })
      });
    }
  }
};
