<template>
    <b-container>
        <h1>很简单很简单的帖子资料生成器</h1>
        <b-row>
            <b-col>
                <p>
                    注意，使用此生成器前亦应先阅读
                    <a href="https://github.com/pca006132/CommandReference/blob/master/format.md" target="_blank">资料格式</a>。
                    里面说明了各种标签和类型的含义和用法。
                </p>
            </b-col>
        </b-row>
        <b-row>
            <b-col><b-form-input v-model="title" type="text" placeholder="帖子标题"></b-form-input></b-col>
        </b-row>
        <b-row>
            <b-col><b-form-input v-model="url" type="text" placeholder="URL"></b-form-input></b-col>
        </b-row>
        <b-row>
            <b-col><tags v-on:update="update_tags" title="Tag （最多8个）" :tags="tags" :maximum="tags_max"></tags></b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col sm="3"><label for="category">类型</label></b-col>
            <b-col sm="9"><b-form-select id="category" v-model="cat" :options="categories"></b-form-select></b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col sm="3"><label for="ver-min">最低版本</label></b-col>
            <b-col sm="9"><b-form-select id="ver-min" v-model="ver_min" :options="versions"></b-form-select></b-col>
        </b-row>
        <b-row>
            <b-col sm="3"><label for="ver-max">最高版本</label></b-col>
            <b-col sm="9"><b-form-select id="ver-max" v-model="ver_max" :options="versions"></b-form-select></b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col sm="3"><label for="last-update">最后主要更新日期</label></b-col>
            <b-col sm="3"><b-form-checkbox v-model="no_update"></b-form-checkbox>不适用</b-col>
            <b-col sm="6"><b-form-input :disabled="no_update" type="date" id="last-update" v-model="last_update"></b-form-input></b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col sm="3"><label for="authors">作者（以半角逗号分隔不同作者名称）</label></b-col>
            <b-col sm="9"><b-form-input type="text" max="2" min="0" id="authors" v-model="authors"></b-form-input></b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col sm="3"><label for="recommended">推荐程度（0为一般，1为推荐阅读，2为推荐新人阅读）</label></b-col>
            <b-col sm="9"><b-form-input type="number" max="2" min="0" id="recommended" v-model="recommended"></b-form-input></b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col><p>只需要把输出写进 data.json 里的 threads 部分，或扔给 pca 即可。<br />看！我多爱你们！ </p></b-col>
            <b-col><code>{{thread}}</code></b-col>
        </b-row>

    </b-container>
</template>

<script>
import tags_input from './filter/tags.vue';
const date_time = /\d{4}-\d{2}-\d{2}/;

export default {
    name: 'tools',
    components: {
        'tags': tags_input
    },
    props: {
        version_min: Number,
        version_max: Number,
        tags: Array,
        tags_max: Number,
        categories: Array
    },
    data() {
        return {
            title: '',
            url: '',
            tag_list: [],
            cat: '',
            recommended: 0,
            ver_min: '',
            ver_min: '',
            last_update: '',
            no_update: false,
            authors: ''
        }
    },
    computed: {
        thread() {
            if (this.title === '') {
                return '错误: 帖子应该有标题。';
            }
            if (this.url === '') {
                return '错误: 帖子应该有 URL 。';
            }
            if (this.cat === '') {
                return '错误: 帖子应该有类型。';
            }
            if (this.ver_min === '' || this.ver_max === '') {
                return '错误: 请正确输入版本。';
            }
            if (!this.no_update && !date_time.exec(this.last_update)) {
                return '错误: 请选择最后更新日期。';
            }

            return `"${this.url}":` + JSON.stringify({
                title: this.title,
                tags: this.tag_list,
                category: this.cat,
                'version-min': (this.version_min === '不适用' || this.version_max === '不适用')? undefined : parseInt(this.ver_min.substring(2)),
                'version-max': (this.version_min === '不适用' || this.version_max === '不适用')? undefined :parseInt(this.ver_max.substring(2)),
                'last-update': this.no_update? undefined : this.last_update,
                recommended: parseInt(this.recommended),
                authors: (this.authors !== '')? this.authors.split(',') : undefined
            })
        },
        versions() {
            let versions = ["不适用"];
            for (let i = this.version_max; i >= this.version_min; i--) {
                versions.push('1.' + i.toString());
            }
            return versions;
        }
    },
    methods: {
        update_tags(tags) {
            this.tag_list = tags;
        }
    }
}
</script>
