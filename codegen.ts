import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsc8ldq4000008jncamv5nk0/master",
  documents: "src/graphql/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: [],
      config: {
        onlyOperationTypes: true,
      },
    },
  },
};

export default config;
