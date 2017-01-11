<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link href="{{ elixir('css/app.css') }}" rel="stylesheet">

    <script type="text/javascript">
        window.Laravel = {!! json_encode(['csrfToken' => csrf_token(),]) !!}
    </script>
</head>
<body>
<div id="app"></div>
<script src="/js/app.js"></script>
</body>
</html>