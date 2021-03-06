import { Rule } from "../interfaces/rule";

class AllRuleEngine<TContext, TResult> {

  evaluate(rules: Rule<TContext, boolean>[], context: TContext): boolean {
    return rules.every(rule => !rule.isApplicable(context) || rule.evaluate(context));
  }
}

const allRuleEngine = new AllRuleEngine();
export { allRuleEngine };
