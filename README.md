# Creator Talent Card

The project was built from the ground up using VS Code Insiders and Copilot Chat in Agent mode. No major UI frameworks were used; as a result, some components may not meet production quality standards. Tailwind CSS v3 was selected due to compatibility challenges with v4 and current LLM knowledge base limitations.

I did use multiple LLMs (primarily Claude 3.7 Sonnet, GPT-4.1, and Gemini 2.5 Pro), depending on the task.

I'm utilizing [custom LLM instructions](.github/copilot-instructions.md) and [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) server for Figma-to-code integration.

Git history is preserved. All feature work is done in branches and squash merged into `main`.

## Known issues

- The overflow menu button in compact mode requires improved visibility and a more intuitive user experience.
- The current fonts do not match those specified in the Figma design file.
- The popover menu is a custom-built component and may exhibit unexpected behavior.
- Unit tests have not yet been implemented for components. This represents technical debt that must be addressed to ensure long-term maintainability and scalability.
