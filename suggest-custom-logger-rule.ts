import { TSESLint } from "@typescript-eslint/utils";

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
  create: (context) => ({}),
};

export default suggestCustomLoggerRule;
