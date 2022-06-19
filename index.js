import visit from 'unist-util-visit'
import remarkMath from 'remark-math'

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `inlineMath`, node => {
    node.type = `html`;
    node.value = node.value = '$' + node.value + '$';
  });

  visit(markdownAST, `math`, node => {
    node.type = `html`;
    node.value = node.value = '$$\n' + node.value + '\n$$';
  });
};

module.exports.setParserPlugins = () => [remarkMath];