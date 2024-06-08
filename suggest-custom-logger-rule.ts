import { TSESLint, AST_NODE_TYPES } from "@typescript-eslint/utils";

type MessageIds = "customLoggerNotUsedForLog" | "customLoggerNotUsedForError";

const suggestCustomLoggerRule: TSESLint.RuleModule<MessageIds> = {
  defaultOptions: [],
  meta: {
    type: "suggestion",
    messages: {
      customLoggerNotUsedForLog:
        "Log를 위해 customLogger가 사용되지 않았습니다.",
      customLoggerNotUsedForError:
        "Error Log를 위해 customLogger가 사용되지 않았습니다.",
    },
    fixable: "code",
    schema: [],
  },
  create: (context) => ({
    CallExpression: (node) => {
      const callee = node.callee;
      if (
        callee.type === AST_NODE_TYPES.MemberExpression &&
        callee.object.type === AST_NODE_TYPES.Identifier &&
        callee.object.name === "console" &&
        callee.property.type === AST_NODE_TYPES.Identifier
      ) {
        if (callee.property.name === "log") {
          context.report({
            node,
            messageId: "customLoggerNotUsedForLog",
          });
        }
        if (callee.property.name === "error") {
          context.report({
            node,
            messageId: "customLoggerNotUsedForError",
          });
        }
      }
    },
  }),
};

export default suggestCustomLoggerRule;
