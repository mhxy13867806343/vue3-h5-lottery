<script setup>
import { getGithubSearch } from "@/api/outer";
import UvImage from "@/uni_modules/uv-image/components/uv-image/uv-image.vue";

const search=ref('')
const currentPage=ref(0)
const dataList=ref(
	{
	"header_redesign_enabled": false,
	"results": [
	{
		"id": "47042287",
		"archived": false,
		"color": "#DA5B0B",
		"followers": 6655,
		"has_funding_file": false,
		"hl_name": "codebasics/<em>py</em>",
		"hl_trunc_description": "Repository to store sample python programs for python learning",
		"language": "Jupyter Notebook",
		"mirror": false,
		"owned_by_organization": true,
		"public": true,
		"repo": {
			"repository": {
				"id": 47042287,
				"name": "py",
				"owner_id": 16063416,
				"owner_login": "codebasics",
				"updated_at": "2024-04-25T02:42:14.961Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [
			"python",
			"python-tutorials",
			"jupyter",
			"numpy",
			"pandas-dataframe",
			"jupyter-notebook",
			"pandas",
			"jupyter-notebooks",
			"python-tutorial",
			"numpy-tutorial",
			"pandas-tutorial",
			"numpy-arrays",
			"python-pandas",
			"jupyter-tutorial"
		],
		"type": "Public",
		"help_wanted_issues_count": 0,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "58224863",
		"archived": false,
		"color": "#3572A5",
		"followers": 3996,
		"has_funding_file": false,
		"hl_name": "AceLewis/my_first_calculator.<em>py</em>",
		"hl_trunc_description": "my_first_calculator.<em>py</em>",
		"language": "Python",
		"mirror": false,
		"owned_by_organization": false,
		"public": true,
		"repo": {
			"repository": {
				"id": 58224863,
				"name": "my_first_calculator.py",
				"owner_id": 10245962,
				"owner_login": "AceLewis",
				"updated_at": "2024-04-03T14:03:39.984Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [],
		"type": "Public",
		"help_wanted_issues_count": 0,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "4815490",
		"archived": false,
		"color": "#ff7f7f",
		"followers": 4611,
		"has_funding_file": false,
		"hl_name": "renpy/renpy",
		"hl_trunc_description": "The Ren'<em>Py</em> Visual Novel Engine",
		"language": "Ren'Py",
		"mirror": false,
		"owned_by_organization": true,
		"public": true,
		"repo": {
			"repository": {
				"id": 4815490,
				"name": "renpy",
				"owner_id": 1900740,
				"owner_login": "renpy",
				"updated_at": "2024-05-21T09:15:50.282Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [
			"game",
			"python",
			"engine",
			"visual",
			"visual-novel",
			"novel",
			"renpy"
		],
		"type": "Public",
		"help_wanted_issues_count": 0,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "98891868",
		"archived": true,
		"color": "#3572A5",
		"followers": 250,
		"has_funding_file": false,
		"hl_name": "cgrok/selfbot.<em>py</em>",
		"hl_trunc_description": "selfbot.<em>py</em> - A python discord selfbot thats easy to install - Written using discord.<em>py</em>",
		"language": "Python",
		"mirror": false,
		"owned_by_organization": true,
		"public": true,
		"repo": {
			"repository": {
				"id": 98891868,
				"name": "selfbot.py",
				"owner_id": 32788763,
				"owner_login": "cgrok",
				"updated_at": "2018-07-27T15:08:56.394Z",
				"has_issues": false
			}
		},
		"sponsorable": false,
		"topics": [
			"moderation",
			"discord-bot",
			"discord-api",
			"selfbot",
			"discord-py",
			"discord-selfbot",
			"selfbot-for-discord"
		],
		"type": "Public archive",
		"help_wanted_issues_count": 1,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "15337503",
		"archived": false,
		"color": "#3572A5",
		"followers": 1648,
		"has_funding_file": false,
		"hl_name": "corelan/mona",
		"hl_trunc_description": "Corelan Repository for mona.<em>py</em>",
		"language": "Python",
		"mirror": false,
		"owned_by_organization": true,
		"public": true,
		"repo": {
			"repository": {
				"id": 15337503,
				"name": "mona",
				"owner_id": 1208482,
				"owner_login": "corelan",
				"updated_at": "2024-03-26T12:20:14.009Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [],
		"type": "Public",
		"help_wanted_issues_count": 0,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "15361362",
		"archived": true,
		"color": "#3572A5",
		"followers": 466,
		"has_funding_file": true,
		"hl_name": "asciidoc-py/asciidoc-<em>py</em>2",
		"hl_trunc_description": "Deprecated python2 implementation of AsciiDoc.<em>py</em>. See asciidoc-<em>py</em>/asciidoc-<em>py</em> for current work.",
		"language": "Python",
		"mirror": false,
		"owned_by_organization": true,
		"public": true,
		"repo": {
			"repository": {
				"id": 15361362,
				"name": "asciidoc-py2",
				"owner_id": 75541223,
				"owner_login": "asciidoc-py",
				"updated_at": "2021-02-12T01:11:26.703Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [],
		"type": "Public archive",
		"help_wanted_issues_count": 0,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "69290591",
		"archived": false,
		"color": "#3572A5",
		"followers": 16413,
		"has_funding_file": false,
		"hl_name": "InstaPy/Insta<em>Py</em>",
		"hl_trunc_description": "📷 Instagram Bot - Tool for automated Instagram interactions",
		"language": "Python",
		"mirror": false,
		"owned_by_organization": true,
		"public": true,
		"repo": {
			"repository": {
				"id": 69290591,
				"name": "InstaPy",
				"owner_id": 46527469,
				"owner_login": "InstaPy",
				"updated_at": "2024-05-11T00:59:50.874Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [
			"python",
			"bot",
			"instagram",
			"automation",
			"script",
			"selenium",
			"clarifai"
		],
		"type": "Public",
		"help_wanted_issues_count": 13,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "41179827",
		"archived": false,
		"color": "#3572A5",
		"followers": 14343,
		"has_funding_file": true,
		"hl_name": "Rapptz/discord.<em>py</em>",
		"hl_trunc_description": "An API wrapper for Discord written in Python.",
		"language": "Python",
		"mirror": false,
		"owned_by_organization": false,
		"public": true,
		"repo": {
			"repository": {
				"id": 41179827,
				"name": "discord.py",
				"owner_id": 1695103,
				"owner_login": "Rapptz",
				"updated_at": "2024-05-20T18:04:12.756Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [
			"python",
			"bot",
			"discord",
			"discord-bot",
			"discord-api",
			"discord-py",
			"python-3"
		],
		"type": "Public",
		"help_wanted_issues_count": 0,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "187459990",
		"archived": false,
		"color": "#3572A5",
		"followers": 249,
		"has_funding_file": false,
		"hl_name": "pashayogi/Fb-hack",
		"hl_trunc_description": "Fb-hack.<em>py</em>",
		"language": "Python",
		"mirror": false,
		"owned_by_organization": false,
		"public": true,
		"repo": {
			"repository": {
				"id": 187459990,
				"name": "Fb-hack",
				"owner_id": 50790111,
				"owner_login": "pashayogi",
				"updated_at": "2024-04-18T22:08:54.410Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [],
		"type": "Public",
		"help_wanted_issues_count": 0,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	},
	{
		"id": "164471183",
		"archived": false,
		"color": "#3572A5",
		"followers": 14148,
		"has_funding_file": false,
		"hl_name": "pjialin/<em>py</em>12306",
		"hl_trunc_description": "🚂 12306 购票助手，支持集群，多账号，多任务购票以及 Web 页面管理 ",
		"language": "Python",
		"mirror": false,
		"owned_by_organization": false,
		"public": true,
		"repo": {
			"repository": {
				"id": 164471183,
				"name": "py12306",
				"owner_id": 12911871,
				"owner_login": "pjialin",
				"updated_at": "2024-05-10T10:02:48.248Z",
				"has_issues": true
			}
		},
		"sponsorable": false,
		"topics": [],
		"type": "Public",
		"help_wanted_issues_count": 0,
		"good_first_issue_issues_count": 0,
		"starred_by_current_user": false
	}
],
	"type": "repositories",
	"page": 1,
	"page_count": 100,
	"elapsed_millis": 408,
	"errors": [],
	"result_count": 3038716,
	"facets": [
	{
		"kind": "FACET_KIND_LANGUAGE",
		"entries": [
			{
				"name": "Python",
				"language_color": "#3572A5",
				"query": "language:Python"
			},
			{
				"name": "Jupyter Notebook",
				"language_color": "#DA5B0B",
				"query": "language:Jupyter Notebook"
			},
			{
				"name": "HTML",
				"language_color": "#e34c26",
				"query": "language:HTML"
			},
			{
				"name": "JavaScript",
				"language_color": "#f1e05a",
				"query": "language:JavaScript"
			},
			{
				"name": "Shell",
				"language_color": "#89e051",
				"query": "language:Shell"
			},
			{
				"name": "Dockerfile",
				"language_color": "#384d54",
				"query": "language:Dockerfile"
			},
			{
				"name": "C++",
				"language_color": "#f34b7d",
				"query": "language:C++"
			},
			{
				"name": "CSS",
				"language_color": "#563d7c",
				"query": "language:CSS"
			},
			{
				"name": "C",
				"language_color": "#555555",
				"query": "language:C"
			},
			{
				"name": "Java",
				"language_color": "#b07219",
				"query": "language:Java"
			}
		]
	}
],
	"protected_org_logins": [],
	"topics": {
	"linked_topic_name": "py",
		"curated_topic": {
		"id": "84",
			"name": "python",
			"flagged": false,
			"short_description": "Python is a dynamically typed programming language.",
			"display_name": "Python",
			"released": "February 20, 1991",
			"wikipedia_url": "https://en.wikipedia.org/wiki/Python_(programming_language)",
			"url": "https://www.python.org/",
			"github_url": "https://github.com/python",
			"logo_url": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
			"has_logo_url": true,
			"featured": true,
			"stargazer_count": 287331,
			"applied_count": 545043,
			"hl_display_name": null,
			"hl_short_description": null,
			"created_by": "Guido van Rossum",
			"curated": true,
			"aliases": [
			"py",
			"python-2",
			"python-3",
			"python-3-5",
			"python-3-6",
			"python2",
			"python27",
			"python3"
		],
			"related": [
			"language",
			"ruby"
		],
			"repository_count": null,
			"repository_count_over_max_fetch_limit": null,
			"starred_by_current_user": null,
			"highlights": {
			"description": null,
				"display_name": null,
				"name.ngram": null
		}
	}
},
"query_id": "",
	"logged_in": false,
	"sign_up_path": "/signup?source=code_search_results",
	"sign_in_path": "/login?return_to=https%3A%2F%2Fgithub.com%2Fsearch%3Fq%3Dpy%26type%3Drepositories%26p%3D1",
	"metadata": null,
	"csrf_tokens": {
	"/codebasics/py/star": {
		"post": "Ue-LFEjIm9d90wrPbSspOXBhe2YNIwAuu6unHpDtiHh1Q3WRRUkGTJHs0VALGRaMM_394b_ZWhjfNFDfB3eVVQ"
	},
	"/codebasics/py/unstar": {
		"post": "gPERwWfZn96ZrC-5H-s31B9mzeXeCpdqI4QNoAwtCBJ8C1Fu31cE6QJ5boGH9GbPK5wwsaFb42UVEDnbDyYadQ"
	},
	"/AceLewis/my_first_calculator.py/star": {
		"post": "dOMxi9yQeNxZHFsn0G26i4w-f7rxr6_bVhJcI7_ulL4r_TbaA2ymN6HCACpROAKrrNkzvKDV6rPCw3yn10l0uA"
	},
	"/AceLewis/my_first_calculator.py/unstar": {
		"post": "ExwYCA66hX7-KsjAJ2jcrfRnMe0J3EYIm9gvdUo0HdNRHlMSd8s0JmczS2ppAVpGpOA0g1dlmAn7h8r2Y3UCNQ"
	},
	"/renpy/renpy/star": {
		"post": "ZPunHlPh8BOOBelUQGRWEgCldhpZGrfL3z-UzEqhqwKN0wmSgVcuA7wAmorXWCG-q-W3D8pYxAouck8F1Rq05A"
	},
	"/renpy/renpy/unstar": {
		"post": "a4HJIVe_zUjvr8cdZwISEBddVhuEFN6LzhkkU5vR2XR4Xj7PRXBmuuQ-wF7hx7_ipLv4LCmej75n50R0gC7L5w"
	},
	"/cgrok/selfbot.py/star": {
		"post": "bdnj8Qn-yg2dILJKrmjaYoawZQM-WHb8NF95IHmYZCsOokggbuI-WJKL747iej0j-zpYnb8ojlLBYBNUorhCtw"
	},
	"/cgrok/selfbot.py/unstar": {
		"post": "XHI7-kDvYeXfaplvF9eU5U7vwhmI9gnULfq3e3CyTgEaib2xIPigjbkxfHemo3A8RsVNYxEENmo8oTZeMVtUXw"
	},
	"/corelan/mona/star": {
		"post": "X6eIhigXucbSOU4mw-1SiktGPL69aPoqCdvYExMTunMyLL82BcRq8RL97uMDShgfpb1BFsTb2BM_qfo2mkbjVw"
	},
	"/corelan/mona/unstar": {
		"post": "oXb1P-hJ3CipoAIfLv_ts4ZUN5e-qPnBAKOYlOhTWNEB4leYcyiHgXakWbucnqavTBsvNA_RA53oJr36d08UIA"
	},
	"/asciidoc-py/asciidoc-py2/star": {
		"post": "3ZTPRZOnGEVnLYE9euaURcDijGye6rhptPkK0dc8YhG-7e-l3hQkE1A8wiwrC74ErFm1nuqktLXQO-4W-WBiWQ"
	},
	"/asciidoc-py/asciidoc-py2/unstar": {
		"post": "7xEE-vd0v9ykMKG_HazyW03I6zZVOcClH-I32gSK57V-Evblq45U_uBHpTYu2e1coMdbkJta7sIkcENGEsb4yQ"
	},
	"/InstaPy/InstaPy/star": {
		"post": "Qn7uua8LXNrpFUJ_4RLW6F9LnzrWHWxMSdLPi9VaoRUJmdrfiLzkiZIxfdix_-uUS-xZHGVcrlGVoCTZ7ZOlAg"
	},
	"/InstaPy/InstaPy/unstar": {
		"post": "GHCqjjIPakwTmO5CbdcKnPKbBPDZ9MpYld9MgjFLXHetgLWnvs2coSRxEMgRkZmFzXKQmE39swvh5WEzpZIU5A"
	},
	"/Rapptz/discord.py/star": {
		"post": "pmI44DCLWid8BvVci5MjK5Vrt_2wJ_8aGtnGcb-ht_dOW7GvPo-2hQBQpjPSWQb9Bf0cGvp-3n7Ff1f4pKqdXQ"
	},
	"/Rapptz/discord.py/unstar": {
		"post": "B5GIxUPAmRsCRF9JCYQrO6HMvyWSWpHierRqipz9HmzHYst7o9p9buHvcviZ-F7w6w-TZ3ASc7-_z0RT0b06Fg"
	},
	"/pashayogi/Fb-hack/star": {
		"post": "OMC1JJJJ7heRMCEFPpPS7QLvErN1AcjLVCbFwECCudEl1XuptIfG6T0c7uCzvNNvqkRDUnzsrkHhInrlpj6WDw"
	},
	"/pashayogi/Fb-hack/unstar": {
		"post": "5dy8m9Splz7AyZo_3v9Bn7FVZ3k1ujU7WdY6PDSOswrgOv_TPKbvH7zYcEy8q8ouzG5S0h5fMhrdrvZOSUdo3Q"
	},
	"/pjialin/py12306/star": {
		"post": "Mqjrr0BeEOJwDQk8pxjk0naATybmiwrDV83MV0GnqOSXq8ILu9B4lvnwms1u1tx6XPWB33Nv4SKEEKHjuu3VkQ"
	},
	"/pjialin/py12306/unstar": {
		"post": "bqG77UNgRmlYeLYN6zb5EuWEU1khKWlMyX1c-Ct1jSRyp2UiuoVgrCBy8t-GI6n9QdBhI-7-JDWv7VEq3xcTsA"
	},
	"/sponsors/batch_deferred_sponsor_buttons": {
		"post": "IYy_06B4Q3oI_DXBJ8UtAAhc26pSOyweqZM-vHYEdu3Z0o1SfBcUrPvi1N8Oj0HSPTT7nPzSnX2kGl9GbwMqHg"
	}
}
})
const repositories=ref([
	{
		username: "TheAlgorithms",
		repo: "Python",
		description: "All Algorithms implemented in Python",
		stars: "180.6k",
		language: "Python",
		image: "https://placehold.co/40x40",
		alt: "TheAlgorithms"
	},
	{
		username: "jakevdp",
		repo: "PythonDataScienceHandbook",
		description: "Python Data Science Handbook: full text in Jupyter Notebooks",
		stars: "41.7k",
		language: "Jupyter Notebook",
		image: "https://placehold.co/40x40",
		alt: "jakevdp"
	},
	{
		username: "AtsushiSakai",
		repo: "PythonRobotics",
		description: "Python sample codes for robotics algorithms.",
		stars: "21.9k",
		language: "Python",
		image: "https://placehold.co/40x40",
		alt: "AtsushiSakai"
	},
	{
		username: "vinta",
		repo: "awesome-python",
		description: "An opinionated list of awesome Python frameworks, libraries, software and resources.",
		stars: "207.4k",
		language: "Python",
		image: "https://placehold.co/40x40",
		alt: "vinta"
	},
	{
		username: "jackfrued",
		repo: "Python-100-Days",
		description: "Python - 100天从新手到大师",
		stars: "150.7k",
		language: "Python",
		image: "https://placehold.co/40x40",
		alt: "jackfrued"
	}
])
onMounted(()=>{
	console.log(dataList.value,)
	// onClickSearch("python")
})
const onClickSearch=(q)=>{
	getGithubSearch({
		q,
		type: "repositories",
		p:1
	}).then(res=>{
		dataList.value=res ||{}
		console.log(dataList.value,2)
	})
}
</script>
<template>
	<view>
		<van-sticky>
			<van-search placeholder="请输入想要搜索的关键字(限制20个字符)"
			            :show-action="!!search.length"
			            v-model="search" maxlength="20"
			>
				<template #action>
					<div @click="onClickSearch(search)">搜索</div>
				</template>
			</van-search>
		</van-sticky>
		<view class="searc-data app-container">
			<view class="search-topics">
			  <view class="linked_topic_name p-data">
				  <uv-image
					  observeLazyLoad
					  width="40"
					  height="40"
					  :src="dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.logo_url">
					  <template v-slot:loading>
						  <uv-loading-icon color="red"></uv-loading-icon>
					  </template>
					  <template v-slot:error>
						  <view style="font-size: 34rpx;">加载失败</view>
					  </template>
				  </uv-image>
				  {{  dataList&&dataList.topics&&dataList.topics.linked_topic_name}}
			  </view>
			<view class="short_description p-data">
				{{  dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.short_description}}
			</view>
			<view class="href p-data">
			
				
				<view class="result_count">
					{{  dataList&&dataList.result_count}}
				</view>
		
				<view class="created_by">
					{{dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.created_by}}
				</view>
				<view class="released">
					{{dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.released}}
				</view>
				<view class="short_description">
					{{dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.short_description}}
				</view>
				<view class="stargazer_count">
				 {{dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.stargazer_count||0}}个
				</view>
				<view class="wikipedia">
					<view class="alink">
						<text>github地址：			</text>
						<uv-link :href="dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.github_url"
						         text="github地址" under-line />
					</view>
					<view class="alink">
						<text>wikipedia_url:</text>
						<uv-link :href="dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.wikipedia_url"
						         text="wikipedia地址" under-line />
					</view>
				</view>
			</view>
			</view>
		</view>
		<view class="page-container">
			<view v-for="(repo, index) in repositories" :key="index" class="repository-item">
				<image class="avatar" :src="repo.avatar" />
				<view class="repo-content">
					<text class="repo-name">{{ repo.name }}</text>
					<text class="repo-description">{{ repo.description }}</text>
					<view class="repo-details">
						<text class="stars">
							<text class="star-icon">★</text> {{ repo.stars }}
						</text>
						<text class="language">{{ repo.language }}</text>
					</view>
				</view>
			</view>
		</view>
		<van-pagination v-model="currentPage" :total-items="dataList&&dataList.page_count" :show-page-size="5">
			<template #prev-text>
				<van-icon name="arrow-left" />
			</template>
			<template #next-text>
				<van-icon name="arrow" />
			</template>
			<template #page="{ text }">{{ text }}</template>
		</van-pagination>
	</view>
</template>
<style scoped lang="scss">
.searc-data{
	
	.search-topics{
		ackground-color: var(--bgColor-default, var(--color-canvas-default, #ffffff));
		border-width: 1px;
		border-style: solid;
		border-color: var(--borderColor-default, var(--color-border-default, #d0d7de));
		border-radius: 12rpx;
		display: flex;
		flex-direction: column;
		padding-top: 32rpx;
		padding-bottom: 8rpx;
	
		.linked_topic_name{
			font-size: 48rpx;
			font-weight: 500;
			text-align: right;
			color:#333;
			display: flex;
			justify-content: flex-end;
		}
		.p-data{
			padding: 20rpx;
		}
		.short_description{
			font-size: 30rpx;
			color: #666;
			
		}
		.href{
			uni-view{
				padding: 20rpx 0;
				font-size: 28rpx;
				color: #666;
			}
			.wikipedia{
				.alink{
					display: flex;
				}
			}
		}
	}
}

.page-container {
	padding: 30rpx;
}

.repository-item {
	display: flex;
	align-items: center;
	padding: 20rpx 0;
}

.avatar {
	width: 80rpx;
	height: 80rpx;
	border-radius: 40rpx;
	margin-right: 20rpx;
}

.repo-content {
	flex-grow: 1;
}

.repo-name {
	font-size: 32rpx;
	font-weight: bold;
}

.repo-description {
	font-size: 28rpx;
	color: #666;
}

.repo-details {
	display: flex;
	align-items: center;
	margin-top: 10rpx;
}

.stars {
	display: flex;
	align-items: center;
	margin-right: 20rpx;
}

.star-icon {
	color: #ffd700;
}

.language {
	font-size: 28rpx;
	color: #007aff;
}
</style>
