# Run lightouse audit
[group('Audit commands')]
audit url="https://kodaskills.github.io/kodaskills.co/" chromeFlags="":
    @echo "ℹ️  {{ BLUE }}Do not forget to have Chrome installed before running this recipe"
    @mkdir -p ./.reports
    @domain=$(echo "{{ url }}" | awk -F[/:] '{print $4 ":" $5}') && \
    path=$(echo "{{ url }}" | awk -F[/:] '{print substr($0, index($0, $6))}' | sed 's#/#_#g') && \
    npx --yes lighthouse {{ url }} --view --chrome-flags="--headless {{ chromeFlags }}--user-data-dir=/opt/chrome-cache/" --output html --output-path "./.reports/${domain}_${path}_$(date +%s).html"

# Run lighthouse audit with actual preview
[group('Audit commands')]
audit-dev route="/" url="http://localhost:4322":
    @echo "⚠️  {{ YELLOW }}Please run 'just preview' before for production results"
    @echo "ℹ️  {{ BLUE }}Play with route parameter to tests another page than index"
    @just audit {{ url }}{{ route }}

# Run lighthouse audit with actual preview for wsl developers
[group('Audit commands')]
audit-dev-wsl route="/" url="http://localhost:4322":
    @echo "⚠️  {{ YELLOW }}Please run 'just preview' before for production results"
    @echo "ℹ️  {{ BLUE }}Play with route parameter to tests another page than index"
    @mkdir -p /tmp/chrome-cache/
    @just audit {{ url }}{{ route }} "--user-data-dir=/tmp/chrome-cache/"
    $(whereis -b chromium | awk '{print $2}') --new-window "$(find .reports -type f -name '*.html' -printf '%T@ %p\n' | sort -nr | head -n1 | cut -d' ' -f2-)"
