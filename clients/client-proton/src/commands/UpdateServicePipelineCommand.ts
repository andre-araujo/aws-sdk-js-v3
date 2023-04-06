// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateServicePipelineInput,
  UpdateServicePipelineInputFilterSensitiveLog,
  UpdateServicePipelineOutput,
  UpdateServicePipelineOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateServicePipelineCommand,
  serializeAws_json1_0UpdateServicePipelineCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 *
 * The input for {@link UpdateServicePipelineCommand}.
 */
export interface UpdateServicePipelineCommandInput extends UpdateServicePipelineInput {}
/**
 * @public
 *
 * The output of {@link UpdateServicePipelineCommand}.
 */
export interface UpdateServicePipelineCommandOutput extends UpdateServicePipelineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update the service pipeline.</p>
 *          <p>There are four modes for updating a service pipeline. The <code>deploymentType</code>
 *       field defines the mode.</p>
 *          <dl>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>NONE</code>
 *                </p>
 *                <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested
 *             metadata parameters are updated.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>CURRENT_VERSION</code>
 *                </p>
 *                <p>In this mode, the service pipeline is deployed and updated with the new spec that
 *             you provide. Only requested parameters are updated. <i>Don’t</i> include
 *             major or minor version parameters when you use this <code>deployment-type</code>.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>MINOR_VERSION</code>
 *                </p>
 *                <p>In this mode, the service pipeline is deployed and updated with the published,
 *             recommended (latest) minor version of the current major version in use, by default. You
 *             can specify a different minor version of the current major version in use.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>MAJOR_VERSION</code>
 *                </p>
 *                <p>In this mode, the service pipeline is deployed and updated with the published,
 *             recommended (latest) major and minor version of the current template by default. You can
 *             specify a different major version that's higher than the major version in use and a
 *             minor version.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServicePipelineCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServicePipelineCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateServicePipelineInput
 *   serviceName: "STRING_VALUE", // required
 *   spec: "STRING_VALUE", // required
 *   deploymentType: "STRING_VALUE", // required
 *   templateMajorVersion: "STRING_VALUE",
 *   templateMinorVersion: "STRING_VALUE",
 * };
 * const command = new UpdateServicePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateServicePipelineCommandInput - {@link UpdateServicePipelineCommandInput}
 * @returns {@link UpdateServicePipelineCommandOutput}
 * @see {@link UpdateServicePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdateServicePipelineCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 *
 */
export class UpdateServicePipelineCommand extends $Command<
  UpdateServicePipelineCommandInput,
  UpdateServicePipelineCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateServicePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServicePipelineCommandInput, UpdateServicePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServicePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "UpdateServicePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServicePipelineInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateServicePipelineOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateServicePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateServicePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServicePipelineCommandOutput> {
    return deserializeAws_json1_0UpdateServicePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
