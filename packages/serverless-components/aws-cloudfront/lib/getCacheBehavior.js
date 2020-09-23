const { getForwardedValues } = require("./cacheBahaviorUtils");

module.exports = (pathPattern, pathPatternConfig, originId) => {
  const {
    allowedHttpMethods = ["GET", "HEAD"],
    minTTL,
    defaultTTL,
    maxTTL,
    compress = true,
    smoothStreaming = false,
    viewerProtocolPolicy = "https-only",
    fieldLevelEncryptionId = "",
    trustedSigners = {
      Enabled: false,
      Quantity: 0
    }
  } = pathPatternConfig;

  return {
    ForwardedValues: getForwardedValues(pathPatternConfig.forward, {
      cookies: "all",
      queryString: true
    }),
    MinTTL: minTTL,
    PathPattern: pathPattern,
    TargetOriginId: originId,
    TrustedSigners: trustedSigners,
    ViewerProtocolPolicy: viewerProtocolPolicy,
    AllowedMethods: {
      Quantity: allowedHttpMethods.length,
      Items: allowedHttpMethods,
      CachedMethods: {
        Items: ["GET", "HEAD"],
        Quantity: 2
      }
    },
    Compress: compress,
    SmoothStreaming: smoothStreaming,
    DefaultTTL: defaultTTL,
    MaxTTL: maxTTL,
    FieldLevelEncryptionId: fieldLevelEncryptionId,
    LambdaFunctionAssociations: {
      Quantity: 0,
      Items: []
    }
  };
};
