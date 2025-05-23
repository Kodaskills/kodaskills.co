# Run lightouse audit
[group('Audit commands')]
audit url="https://kodaskills.github.io/kodaskills.co/":
    @echo "ℹ️  {{ BLUE }}Do not forget to have Chrome insstalled before running this recipe"
    @mkdir -p ./.reports
    @domain=$(echo "{{ url }}" | awk -F[/:] '{print $4 ":" $5}') && \
    path=$(echo "{{ url }}" | awk -F[/:] '{print substr($0, index($0, $6))}' | sed 's#/#_#g') && \
    npx --yes lighthouse {{ url }} --view --chrome-flags="--headless" --output html --output-path "./.reports/${domain}_${path}_$(date +%s).html"

# Run lighthouse audit with actual previex
[group('Audit commands')]
audit-dev route="/" url="http://localhost:4322":
    @echo "⚠️  {{ YELLOW }}Please run 'just preview' before for production results"
    @echo "ℹ️  {{ BLUE }}Play with route parameter to tests another page than index"
    @just audit {{ url }}{{ route }}
