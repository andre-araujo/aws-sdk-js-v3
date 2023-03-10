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
  DescribeUploadBufferInput,
  DescribeUploadBufferInputFilterSensitiveLog,
  DescribeUploadBufferOutput,
  DescribeUploadBufferOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUploadBufferCommand,
  serializeAws_json1_1DescribeUploadBufferCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * The input for {@link DescribeUploadBufferCommand}.
 */
export interface DescribeUploadBufferCommandInput extends DescribeUploadBufferInput {}
/**
 * The output of {@link DescribeUploadBufferCommand}.
 */
export interface DescribeUploadBufferCommandOutput extends DescribeUploadBufferOutput, __MetadataBearer {}

/**
 * <p>Returns information about the upload buffer of a gateway. This operation is supported
 *          for the stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>The response includes disk IDs that are configured as upload buffer space, and it
 *          includes the amount of upload buffer space allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeUploadBufferCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeUploadBufferCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeUploadBufferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUploadBufferCommandInput} for command's `input` shape.
 * @see {@link DescribeUploadBufferCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @example To describe upload buffer of gateway
 * ```javascript
 * // Returns information about the upload buffer of a gateway including disk IDs and the amount of upload buffer space allocated/used.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeUploadBufferCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DiskIds": [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:04:00.0-scsi-0:1:0:0"
 *   ],
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "UploadBufferAllocatedInBytes": 0,
 *   "UploadBufferUsedInBytes": 161061273600
 * }
 * *\/
 * // example id: to-describe-upload-buffer-of-gateway-1471631099003
 * ```
 *
 * @example To describe upload buffer of a gateway
 * ```javascript
 * // Returns information about the upload buffer of a gateway including disk IDs and the amount of upload buffer space allocated and used.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeUploadBufferCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DiskIds": [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:04:00.0-scsi-0:1:0:0"
 *   ],
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "UploadBufferAllocatedInBytes": 161061273600,
 *   "UploadBufferUsedInBytes": 0
 * }
 * *\/
 * // example id: to-describe-upload-buffer-of-a-gateway--1471904566370
 * ```
 *
 */
export class DescribeUploadBufferCommand extends $Command<
  DescribeUploadBufferCommandInput,
  DescribeUploadBufferCommandOutput,
  StorageGatewayClientResolvedConfig
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

  constructor(readonly input: DescribeUploadBufferCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUploadBufferCommandInput, DescribeUploadBufferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUploadBufferCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeUploadBufferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUploadBufferInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeUploadBufferOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUploadBufferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeUploadBufferCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUploadBufferCommandOutput> {
    return deserializeAws_json1_1DescribeUploadBufferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
