# Output the CI/CD workflow as graph
[group('CI/CD commands')]
workflow:
    @act --graph

# Test the whole CI/CD locally
[group('CI/CD commands')]
cd:
    @act --artifact-server-path /tmp/artifacts

# Test only the CI job locally
[group('CI/CD commands')]
ci:
    @act -j 'build' --artifact-server-path /tmp/artifacts
