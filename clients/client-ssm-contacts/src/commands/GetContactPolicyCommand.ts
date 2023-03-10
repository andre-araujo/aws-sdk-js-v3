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
  GetContactPolicyRequest,
  GetContactPolicyRequestFilterSensitiveLog,
  GetContactPolicyResult,
  GetContactPolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetContactPolicyCommand,
  serializeAws_json1_1GetContactPolicyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link GetContactPolicyCommand}.
 */
export interface GetContactPolicyCommandInput extends GetContactPolicyRequest {}
/**
 * The output of {@link GetContactPolicyCommand}.
 */
export interface GetContactPolicyCommandOutput extends GetContactPolicyResult, __MetadataBearer {}

/**
 * <p>Retrieves the resource policies attached to the specified contact or escalation
 *          plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactPolicyCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactPolicyCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new GetContactPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContactPolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @example To list the resource policies of a contact
 * ```javascript
 * // The following get-contact-policy example lists the resource policies associated with the specified contact.
 * const input = {
 *   "ContactArn": "arn:aws:ssm-contacts:us-east-1:111122223333:contact/akuam"
 * };
 * const command = new GetContactPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ContactArn": "arn:aws:ssm-contacts:us-east-1:111122223333:contact/akuam",
 *   "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"SharePolicyForDocumentationDralia\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"222233334444\"},\"Action\":[\"ssm-contacts:GetContact\",\"ssm-contacts:StartEngagement\",\"ssm-contacts:DescribeEngagement\",\"ssm-contacts:ListPagesByEngagement\",\"ssm-contacts:StopEngagement\"],\"Resource\":[\"arn:aws:ssm-contacts:*:111122223333:contact/akuam\",\"arn:aws:ssm-contacts:*:111122223333:engagement/akuam/*\"]}]}"
 * }
 * *\/
 * // example id: to-list-the-details-of-a-contact-channel-1630365682730
 * ```
 *
 */
export class GetContactPolicyCommand extends $Command<
  GetContactPolicyCommandInput,
  GetContactPolicyCommandOutput,
  SSMContactsClientResolvedConfig
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

  constructor(readonly input: GetContactPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContactPolicyCommandInput, GetContactPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContactPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "GetContactPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContactPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContactPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContactPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContactPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContactPolicyCommandOutput> {
    return deserializeAws_json1_1GetContactPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
