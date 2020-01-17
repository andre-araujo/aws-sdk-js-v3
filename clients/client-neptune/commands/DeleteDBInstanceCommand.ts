import {
  NeptuneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../NeptuneClient";
import { DBInstance, DeleteDBInstanceMessage } from "../models/index";
import {
  deserializeAws_queryDeleteDBInstanceCommand,
  serializeAws_queryDeleteDBInstanceCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DeleteDBInstanceCommandInput = DeleteDBInstanceMessage;
export type DeleteDBInstanceCommandOutput = DBInstance;

export class DeleteDBInstanceCommand extends $Command<
  DeleteDBInstanceCommandInput,
  DeleteDBInstanceCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDBInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteDBInstanceCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteDBInstanceCommandOutput> {
    return deserializeAws_queryDeleteDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
