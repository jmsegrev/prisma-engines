window.SIDEBAR_ITEMS = {"enum":[["BatchMessage","Messages sent between application thread and batch span processor’s work thread."],["Sampler","Sampling options"],["SamplingDecision","Decision about whether or not to sample"]],"fn":[["config","Default trace configuration"]],"struct":[["BatchConfig","Batch span processor configuration"],["BatchSpanProcessor","A [`SpanProcessor`] that asynchronously buffers finished spans and reports them at a preconfigured interval."],["BatchSpanProcessorBuilder","A builder for creating [`BatchSpanProcessor`] instances."],["Builder","Builder for provider attributes."],["Config","Tracer configuration"],["EvictedHashMap","A hash map with a capped number of attributes that retains the most recently set entries."],["EvictedQueue","This queue maintains an ordered list of elements, and a count of dropped elements. Elements are removed from the queue in a first in first out fashion."],["IdGenerator","Default [`crate::trace::IdGenerator`] implementation. Generates Trace and Span ids using a random number generator."],["SamplingResult","The result of sampling logic for a given `Span`."],["SimpleSpanProcessor","A [`SpanProcessor`] that exports synchronously when spans are finished."],["Span","Single operation within a trace."],["SpanLimits","Span limit configuration to keep attributes, events and links to a span in a reasonable number."],["Tracer","`Tracer` implementation to create and manage spans"],["TracerProvider","Creator and registry of named `Tracer` instances."],["XrayIdGenerator","Generates AWS X-Ray compliant Trace and Span ids."]],"trait":[["ShouldSample","The `ShouldSample` interface allows implementations to provide samplers which will return a sampling `SamplingResult` based on information that is typically available just before the `Span` was created."],["SpanProcessor","`SpanProcessor` is an interface which allows hooks for span start and end method invocations. The span processors are invoked only when is_recording is true."],["TraceRuntime","Trace runtime is an extension to `Runtime`. Currently it provides a channel that used by `BatchSpanProcessor`."],["TrySend","TrySend is an abstraction of sender that is capable to send BatchMessage with reference."]]};