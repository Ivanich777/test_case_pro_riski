export type ProcessedTrade = ReturnType<
    ReturnType<typeof import('./hooks/useTradesTable').useTradesTable>['processTrade']
>;

