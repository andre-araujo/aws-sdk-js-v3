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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import {
  CreateEnvironmentMessage,
  CreateEnvironmentMessageFilterSensitiveLog,
  EnvironmentDescription,
  EnvironmentDescriptionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateEnvironmentCommand,
  serializeAws_queryCreateEnvironmentCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentMessage {}
/**
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends EnvironmentDescription, __MetadataBearer {}

/**
 * <p>Launches an AWS Elastic Beanstalk environment for the specified application using the specified
 *       configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @example To create a new environment for an application
 * ```javascript
 * // The following operation creates a new environment for version v1 of a java application named my-app:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "CNAMEPrefix": "my-app",
 *   "EnvironmentName": "my-env",
 *   "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   "VersionLabel": "v1"
 * };
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationName": "my-app",
 *   "CNAME": "my-app.elasticbeanstalk.com",
 *   "DateCreated": "2015-02-03T23:04:54.479Z",
 *   "DateUpdated": "2015-02-03T23:04:54.479Z",
 *   "EnvironmentId": "e-izqpassy4h",
 *   "EnvironmentName": "my-env",
 *   "Health": "Grey",
 *   "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   "Status": "Launching",
 *   "Tier": {
 *     "Name": "WebServer",
 *     "Type": "Standard",
 *     "Version": " "
 *   },
 *   "VersionLabel": "v1"
 * }
 * *\/
 * // example id: to-create-a-new-environment-for-an-application-1456269380396
 * ```
 *
 */
export class CreateEnvironmentCommand extends $Command<
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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

  constructor(readonly input: CreateEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreateEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEnvironmentMessageFilterSensitiveLog,
      outputFilterSensitiveLog: EnvironmentDescriptionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEnvironmentCommandOutput> {
    return deserializeAws_queryCreateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
