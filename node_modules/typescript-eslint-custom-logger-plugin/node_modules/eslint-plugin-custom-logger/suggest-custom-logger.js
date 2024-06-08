module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "console.log 대신 Customlogger를 사용하는 것을 권장한다.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.object?.name === "console" &&
          node.callee.property.name === "log"
        ) {
          context.report({
            node,
            message:
              "customLogger가 아닌 일반 console 로그가 사용되었습니다. Unexpected Logger: {{ usedLogger }}",
            data: {
              usedLogger: node.callee.object.name,
            },
            fix(fixer) {
              const sourceCode = context.getSourceCode();
              const currLogCall = sourceCode.getText(node);
              const fixedLogCall = currLogCall.replace(
                "console.log",
                "CustomLogger.log"
              );
              return fixer.replaceText(node, fixedLogCall);
            },
          });
        }
      },
    };
  },
};
