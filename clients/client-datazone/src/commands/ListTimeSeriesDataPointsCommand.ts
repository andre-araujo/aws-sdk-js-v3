// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTimeSeriesDataPointsInput, ListTimeSeriesDataPointsOutput } from "../models/models_1";
import { de_ListTimeSeriesDataPointsCommand, se_ListTimeSeriesDataPointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTimeSeriesDataPointsCommand}.
 */
export interface ListTimeSeriesDataPointsCommandInput extends ListTimeSeriesDataPointsInput {}
/**
 * @public
 *
 * The output of {@link ListTimeSeriesDataPointsCommand}.
 */
export interface ListTimeSeriesDataPointsCommandOutput extends ListTimeSeriesDataPointsOutput, __MetadataBearer {}

/**
 * <p>Lists time series data points.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListTimeSeriesDataPointsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListTimeSeriesDataPointsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListTimeSeriesDataPointsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET" || "LISTING", // required
 *   formName: "STRING_VALUE", // required
 *   startedAt: new Date("TIMESTAMP"),
 *   endedAt: new Date("TIMESTAMP"),
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTimeSeriesDataPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListTimeSeriesDataPointsOutput
 * //   items: [ // TimeSeriesDataPointSummaryFormOutputList
 * //     { // TimeSeriesDataPointSummaryFormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeIdentifier: "STRING_VALUE", // required
 * //       typeRevision: "STRING_VALUE",
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       contentSummary: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTimeSeriesDataPointsCommandInput - {@link ListTimeSeriesDataPointsCommandInput}
 * @returns {@link ListTimeSeriesDataPointsCommandOutput}
 * @see {@link ListTimeSeriesDataPointsCommandInput} for command's `input` shape.
 * @see {@link ListTimeSeriesDataPointsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class ListTimeSeriesDataPointsCommand extends $Command
  .classBuilder<
    ListTimeSeriesDataPointsCommandInput,
    ListTimeSeriesDataPointsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListTimeSeriesDataPoints", {})
  .n("DataZoneClient", "ListTimeSeriesDataPointsCommand")
  .f(void 0, void 0)
  .ser(se_ListTimeSeriesDataPointsCommand)
  .de(de_ListTimeSeriesDataPointsCommand)
  .build() {}
