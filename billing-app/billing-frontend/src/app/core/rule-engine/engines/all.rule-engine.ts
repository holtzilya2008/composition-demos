import { Rule } from "../interfaces/rule";

class AllRuleEngine<TContext, TResult> {

  aggregateAllBoolean(rules: Rule<TContext, boolean>[], context: TContext): boolean {
    return rules.every(rule => !rule.isApplicable(context) || rule.execute(context));
  }
}

const allRuleEngine = new AllRuleEngine();
export { allRuleEngine };
