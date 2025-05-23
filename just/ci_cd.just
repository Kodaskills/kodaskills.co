# Test the CD workflow locally
[group('CI/CD commands')]
cd:
    act --artifact-server-path /tmp/artifacts

# Test the CI only workflow locally
[group('CI/CD commands')]
ci:
    act -j 'build' --artifact-server-path /tmp/artifacts
