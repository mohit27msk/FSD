#include <bits/stdc++.h>
using namespace std;

int main() {
    int N;
    cin >> N;                     // input size
    vector<int> p(N);
    
    for (int i = 0; i < N; i++) {
        cin >> p[i];              // stock prices
    }

    int min_price = INT_MAX;
    int max_profit = 0;

    for (int i = 0; i < N; i++) {
        min_price = min(min_price, p[i]);          // track lowest price so far
        max_profit = max(max_profit, p[i] - min_price);  // check profit if sold today
    }

    cout << max_profit << endl;   // print maximum profit
    return 0;
}