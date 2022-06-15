export interface Rule<TContext, TResult> {

  isApplicable(context: TContext): boolean;
  evaluate(context: TContext): TResult;

}
