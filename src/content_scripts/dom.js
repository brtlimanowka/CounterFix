var doc_url = document.URL
doc_url.indexOf("sys_report_template.do") === -1 ? void(0) : cloneCounter()

function cloneCounter() {
    var top_counter = document.getElementsByClassName("breadcrumb_container group_count pull-right")[0]
    var bottom_counter = document.getElementsByClassName("vcr_controls")[0]

    let counter_clone = bottom_counter.cloneNode(true)
    top_counter.append(counter_clone)
}
