export interface Rule<TContext, TResult> {

  isApplicable(context: TContext): boolean;
  execute(context: TContext): TResult;

}
